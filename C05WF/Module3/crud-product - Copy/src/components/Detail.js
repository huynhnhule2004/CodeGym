import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null); // Khởi tạo product là null

    const getOne = () => {
        axios.get('http://localhost:3000/products/' + id)
            .then((res) => {
                let { data } = res;
                setProduct(data); // Giả sử data là một đối tượng sản phẩm
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching product:", error); // Bắt lỗi nếu có
            });
    };

    useEffect(() => {
        getOne();
    }, [id]); // Thêm id vào dependency array

    // Kiểm tra xem product có hợp lệ không
    if (!product) {
        return <p>Loading...</p>; // Trả về trạng thái loading nếu product chưa có
    }

    return (
        <>
            <h1>Chi tiết sản phẩm</h1>
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <img src={product.img} alt={`Hình ảnh của ${product.name}`} />
                <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</p>
                <p>{product.stock > 0 ? `${product.stock} trong kho` : 'Hết hàng'}</p>
            </div>
        </>
    );
}
