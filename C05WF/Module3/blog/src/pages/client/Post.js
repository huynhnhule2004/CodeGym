import { faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";
import React, { useEffect, useState } from 'react';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';


export function Post() {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            // Gọi API để lấy danh sách các bài post
            let data = await baseAxios(METHOD_HTTP.GET, "posts"); // Thay đổi URL theo endpoint chính xác của bạn

            const username = localStorage.getItem("username"); // Lấy username từ localStorage

            // Lọc bài viết theo username
            const filteredPosts = data.filter(post => post.username === username);
            setPosts(filteredPosts); // Cập nhật state `posts` với dữ liệu từ API
        } catch (e) {
            console.error("Failed to fetch posts:", e.message); // Log lỗi khi không lấy được dữ liệu
        }
    };

    useEffect(() => {
        getPosts(); // Gọi hàm getPosts khi component được render
    }, []);

    // State để theo dõi trạng thái mở rộng cho từng bài viết
    const [expandedPosts, setExpandedPosts] = useState({});

    const toggleExpand = (postId) => {
        setExpandedPosts((prevState) => ({
            ...prevState,
            [postId]: !prevState[postId], // Đổi trạng thái mở rộng cho bài viết tương ứng
        }));
    };

    const deletePost = async (postId) => {
        const confirmed = window.confirm("Are you sure you want to delete this post?");

        if (!confirmed) {
            return;
        }

        try {
            // Lấy token từ localStorage hoặc nơi nào đó bạn lưu trữ
            const token = localStorage.getItem("token");

            await baseAxios(METHOD_HTTP.DELETE, `posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}` // Gửi token trong header
                }
            });

            getPosts(); // Cập nhật lại danh sách bài viết
        } catch (e) {
            console.error("Failed to delete post:", e.message);
        }
    };

    return (
        <div className="w-full flex">
            <div className="w-2/3">
                <div className="flex justify-between w-full mb-10">
                    <div className="w-20 h-20">
                        <img className=" rounded-full h-14 w-14" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                        <span className="text-[12px]">huynhnhu2k4</span>
                    </div>
                    <div className="w-20 h-20">
                        <img className=" rounded-full h-14 w-14" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                        <span className="text-[12px]">huynhnhu2k4</span>
                    </div>
                    <div className="w-20 h-20">
                        <img className=" rounded-full h-14 w-14" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                        <span className="text-[12px]">huynhnhu2k4</span>
                    </div>
                    <div className="w-20 h-20">
                        <img className=" rounded-full h-14 w-14" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                        <span className="text-[12px]">huynhnhu2k4</span>
                    </div>
                    <div className="w-20 h-20">
                        <img className=" rounded-full h-14 w-14" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                        <span className="text-[12px]">huynhnhu2k4</span>
                    </div>
                    <div className="w-20 h-20">
                        <img className=" rounded-full h-14 w-14" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                        <span className="text-[12px]">huynhnhu2k4</span>
                    </div>
                    <div className="w-20 h-20">
                        <img className=" rounded-full h-14 w-14" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                        <span className="text-[12px]">huynhnhu2k4</span>
                    </div>
                    <div className="w-20 h-20">
                        <img className=" rounded-full h-14 w-14" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                        <span className="text-[12px]">huynhnhu2k4</span>
                    </div>

                </div>
                {posts.length > 0 ? (
                    posts.map((post) => {
                        const isExpanded = expandedPosts[post.id] || false; // Lấy trạng thái mở rộng cho bài viết
                        const contentPreview = post.content.length > 400 ? post.content.slice(0, 400) + '...' : post.content;

                        return (
                            <div className="px-20" key={post.id}>
                                <div className="border-b border-[#333] pb-3 mb-3">
                                    <div className="flex items-center mb-3 justify-between">
                                        <div className="flex items-center">
                                            <img className="rounded-full h-10 w-10" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                                            <div className="ms-3">
                                                <span className="block font-bold">{post.username}</span>
                                                <span className="text-xs">{post.createAt}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to={"/edit/" + post.id}><FontAwesomeIcon className="w-5 h-5 text-end hover:opacity-70" icon={faPenToSquare} /></Link>
                                            <FontAwesomeIcon className="w-5 h-5 ml-2 text-end hover:opacity-70" icon={faTrash} onClick={() => deletePost(post.id)} />
                                        </div>
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: isExpanded ? post.content : contentPreview }}></p>
                                    {/* "Xem thêm" button */}
                                    {post.content.length > 400 && (
                                        <button onClick={() => toggleExpand(post.id)} className="font-bold hover:underline">
                                            {isExpanded ? "Thu gọn" : "Xem thêm"}
                                        </button>
                                    )}
                                    <div className="mt-2">
                                        <FontAwesomeIcon className="w-6 h-6 me-3 hover:opacity-70" icon={faHeart} />
                                        <FontAwesomeIcon className="w-6 h-6 me-3 hover:opacity-70" icon={faComment} />
                                        <FontAwesomeIcon className="w-6 h-6 me-3 hover:opacity-70" icon={faPaperPlane} />
                                    </div>
                                    <span className="font-bold">47 likes</span>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No posts available.</p>
                )}

            </div>
            <div className="w-1/3 ps-16">
                <div className="flex items-center mb-3">
                    <img className="rounded-full h-10 w-10" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                    <div>
                        <span className="ms-3 block font-bold">huynhnhu2k4</span>
                    </div>
                </div>
                <p className="font-bold text-[#333] mb-4">Suggested for you</p>
                <div className="flex items-center mb-3">
                    <img className="rounded-full h-10 w-10" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                    <div>
                        <span className="ms-3 block font-bold">huynhnhu2k4</span>
                    </div>
                </div>
                <div className="flex items-center mb-3">
                    <img className="rounded-full h-10 w-10" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                    <div>
                        <span className="ms-3 block font-bold">huynhnhu2k4</span>
                    </div>
                </div>
                <div className="flex items-center mb-3">
                    <img className="rounded-full h-10 w-10" src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/top-36-anh-dai-dien-dep-cho-nu/anh-dai-dien-dep-cho-nu-che-mat-anime.jpg?1708401649581" />
                    <div>
                        <span className="ms-3 block font-bold">huynhnhu2k4</span>
                    </div>
                </div>
                <p className="mt-5 text-sm text-[#333]" >© 2024 Instagram from Meta</p>
            </div>
        </div>
    )

}