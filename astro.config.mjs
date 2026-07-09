---

const services = [
  "SEO Audit",
  "Technical SEO",
  "On-Page SEO",
  "Keyword Research",
  "Content Strategy",
  "E-commerce SEO",
  "SEO لمتاجر سلة",
  "Off-Page SEO"
];

---

<section class="hero">

<div class="container hero-grid">

<div class="hero-content">

<span class="badge">
🚀 متخصص SEO منذ 2020
</span>

<h1>

أحمد مسعود

</h1>

<h2>

متخصص تحسين محركات البحث للمواقع والمتاجر الإلكترونية

</h2>

<p>

أساعد أصحاب المواقع والمتاجر الإلكترونية على زيادة الزيارات العضوية وتحسين ترتيب الكلمات المفتاحية من خلال استراتيجيات SEO عملية تعتمد على البيانات والنتائج.

</p>

<div class="buttons">

<a
href="https://wa.me/201141289932"
class="btn primary">

تواصل عبر واتساب

</a>

<a
href="https://www.linkedin.com/in/ahmed-masoud95/"
target="_blank"
class="btn secondary">

حساب لينكدإن

</a>

</div>

<div class="services">

{
services.map(service=>(
<span>{service}</span>
))
}

</div>

</div>

<div class="hero-image">

<img
src="/profile.png"
alt="Ahmed Masoud"
/>

</div>

</div>

</section>
.hero{

min-height:100vh;

display:flex;

align-items:center;

padding:80px 0;

}

.hero-grid{

display:grid;

grid-template-columns:1fr 1fr;

gap:70px;

align-items:center;

}

.hero-content h1{

font-size:70px;

font-weight:800;

margin:15px 0;

}

.hero-content h2{

font-size:34px;

color:#2563eb;

margin-bottom:25px;

}

.hero-content p{

font-size:21px;

line-height:2;

color:#555;

margin-bottom:35px;

}

.badge{

display:inline-block;

background:#DBEAFE;

color:#2563EB;

padding:10px 18px;

border-radius:30px;

font-weight:700;

}

.buttons{

display:flex;

gap:15px;

margin-bottom:35px;

flex-wrap:wrap;

}

.btn{

padding:15px 28px;

border-radius:12px;

font-weight:bold;

transition:.3s;

}

.primary{

background:#2563EB;

color:white;

}

.primary:hover{

background:#1d4ed8;

}

.secondary{

background:white;

box-shadow:0 10px 25px rgba(0,0,0,.08);

}

.secondary:hover{

transform:translateY(-4px);

}

.services{

display:flex;

gap:12px;

flex-wrap:wrap;

}

.services span{

background:white;

padding:12px 18px;

border-radius:30px;

box-shadow:0 8px 20px rgba(0,0,0,.08);

font-size:15px;

}

.hero-image{

display:flex;

justify-content:center;

}

.hero-image img{

width:430px;

border-radius:35px;

box-shadow:0 25px 70px rgba(0,0,0,.15);

}

@media(max-width:900px){

.hero{

padding:50px 0;

}

.hero-grid{

grid-template-columns:1fr;

text-align:center;

}

.hero-content h1{

font-size:45px;

}

.hero-content h2{

font-size:25px;

}

.buttons{

justify-content:center;

}

.services{

justify-content:center;

}

.hero-image{

order:-1;

margin-bottom:30px;

}

.hero-image img{

width:300px;

}

}