import img from '../../assets/home/featured.jpg'
import SectionTile from '../../Components/SectionTitle/SectionTile';
import './Featured.css'


const Featured = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto featured_bg pt-2 pb-20 bg-fixed text-white mt-10">
            <SectionTile subHading={'Check it out'} Hading={'FROM OUR MENU'}></SectionTile>
            <div className='flex gap-10 items-center justify-center max-w-4xl mx-auto'>
                <div>
                    <img src={img} className='rounded-xl' alt="" />
                </div>
               <div className='space-y-5'>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, doloribus fugiat? Tenetur tempore aspernatur esse sit magni quos ut repellendus ipsum voluptatem error, harum consectetur molestiae fugiat recusandae sed aliquam impedit optio molestias ea, laborum voluptas adipisci explicabo fuga. Eum?</p>
                <button className='btn btn-outline border-0 border-b-2 border-amber-300 bg-black'>Read more</button>
               </div>
            </div>
        </div>
        </section>
    );
};

export default Featured;