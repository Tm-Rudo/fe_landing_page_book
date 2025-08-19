const mainContainer = document.getElementById("main-container");

const books = [
  {
    img: "./img/placeholder.png",
    category: "Phát triển bản thân",
    title: "Nghệ Thuật Sống Tối Giản",
    author: "Marie Kondo",
    rating: "4.8",
    new_price: "299,000đ",
    old_price: "399,000đ",
    rating_count: 1234,
  },
  {
    img: "./img/python-programming-book-cover.png",
    category: "Công nghệ",
    title: "Lập Trình Python Từ Cơ Bản",
    author: "Nguyễn Văn A",
    rating: "4.9",
    new_price: "450,000đ",
    old_price: "550,000đ",
    rating_count: 856,
  },
  {
    img: "./img/placeholder.png",
    category: "Tâm lý học",
    title: "Tâm Lý Học Đám Đông",
    author: "Gustave Le Bon",
    rating: "4.7",
    new_price: "199,000đ",
    old_price: "250,000đ",
    rating_count: 2341,
  },
  {
    img: "./img/placeholder.png",
    category: "Kinh tế",
    title: "Kinh Tế Học Vi Mô",
    author: "Paul Krugman",
    rating: "4.6",
    new_price: "599,000đ",
    old_price: "650,000đ",
    rating_count: 567,
  },

  {
    img: "./img/modern-ui-ux-book-cover.png",
    category: "Thiết kế",
    title: "Thiết Kế UI/UX Hiện Đại",
    author: "Steve Krug",
    rating: "4.8",
    new_price: "399,000đ",
    old_price: "450,000đ",
    rating_count: 1123,
  },

  {
    img: "./img/vietnamese-history-book-cover.png",
    category: "Lịch sử",
    title: "Lịch Sử Việt Nam",
    author: "Trần Trọng Kim",
    rating: "4.9",
    new_price: "399,000đ",
    old_price: "450,000đ",
    rating_count: 1876,
  },
];

// render vô list
books.forEach((book) => {
  mainContainer.innerHTML += `          
  <div class="main-book-detail">
            <img src="${book.img}" alt="" />
            <div class="book-detail-content">
              <span class="book-category">${book.category}</span>
              <h3>${book.title}</h3>
              <span class="book-author">${book.author}</span>
              <div class="book-rating">
                <img src="./img/full-star.png" alt="" />
                <img src="./img/full-star.png" alt="" />
                <img src="./img/full-star.png" alt="" />
                <img src="./img/full-star.png" alt="" />
                <img src="./img/half-star.png" alt="" />

                <span class="star-rating">${book.rating} (${book.rating_count} đánh giá)</span>
              </div>

              <div class="book-price">
                <h2>${book.new_price}</h2>
                <span>${book.old_price}</span>
              </div>
            </div>
            <div class="btn-buy">
              <button>
                <i class="fa-solid fa-cart-shopping"></i>Thêm vào giỏ hàng
              </button>
            </div>
          </div>`;
});
