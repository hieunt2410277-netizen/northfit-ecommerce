import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react'

const products = [
  { name: 'Áo thun Essential', price: '199.000đ', badge: 'BÁN CHẠY' },
  { name: 'Quần short Daily', price: '249.000đ', badge: 'NEW' },
  { name: 'Áo polo Performance', price: '349.000đ', badge: '-20%' },
]

export default function App() {
  return (
    <main className="app-shell">
      <header className="site-header">
        <a className="brand" href="/">COOLMATE</a>
        <nav aria-label="Điều hướng chính">
          <a href="#products">Sản phẩm</a>
          <a href="#membership">CoolClub</a>
          <a href="#support">Hỗ trợ</a>
        </nav>
        <button className="icon-button" aria-label="Mở giỏ hàng">
          <ShoppingBag size={20} />
        </button>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow"><Sparkles size={15} /> DAILY PERFORMANCE</p>
          <h1>Mặc chất. Sống khỏe. Mỗi ngày.</h1>
          <p className="hero-copy">Trang phục tối giản, thoải mái và sẵn sàng cho mọi nhịp sống.</p>
          <a className="primary-button" href="#products">Khám phá sản phẩm <ArrowRight size={18} /></a>
        </div>
        <div className="hero-panel" aria-label="Ưu đãi hôm nay">
          <span>UP TO</span>
          <strong>50%</strong>
          <small>ưu đãi thành viên</small>
        </div>
      </section>

      <section id="products" className="section">
        <div className="section-heading">
          <div><p className="eyebrow">CURATED FOR YOU</p><h2>Sản phẩm nổi bật</h2></div>
          <a href="#products">Xem tất cả <ArrowRight size={16} /></a>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image"><span>{product.badge}</span></div>
              <div className="product-info"><h3>{product.name}</h3><p>{product.price}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="membership" className="member-banner">
        <div><p className="eyebrow">COOLCLUB</p><h2>Thành viên Coolmate, nhiều đặc quyền hơn.</h2></div>
        <a className="member-button" href="#support">Tham gia ngay <ArrowRight size={17} /></a>
      </section>
    </main>
  )
}
