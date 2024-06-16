import React from 'react'

// Images
import StoryImg1 from '../../assets/images/story-img1.jpg'
import StoryImg2 from '../../assets/images/story-img2.png'

const Story: React.FC = () => {
    return (
        <section className='mt-11 mb-28'>
            <div className="container">
                <article className='mb-15 flex gap-5 flex-wrap items-center justify-center xl:justify-between'>
                    <div className='max-w-[561px]'>
                        <h2 className='mb-[31px] font-lexand600 text-[22px] md:text-[36px] tracking-[-5%] text-colorBlack'>Seedra helps to grow fast and efficiant</h2>
                        <p className='text-colorBlack mb-6'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                        <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                        <p className='mb-6'>&nbsp;  Your easy growing experience is our guarantee <br /> Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                        <p>&nbsp;  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                    </div>
                    <img className='w-[620px] m-0 xl:-mr-32' src={StoryImg1} alt="story image" />
                </article>
                <article className='mb-15 flex gap-5 flex-wrap items-center justify-center xl:justify-between'>
                    <img src={StoryImg2} alt="story image" />
                    <div className='max-w-[501px] xl:order-1 -order-1'>
                        <h2 className='mb-[31px] font-lexand600 text-[22px] md:text-[36px] tracking-[-5%] text-colorBlack'>Our story</h2>
                        <p className='text-colorBlack mb-6'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                        <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                        <p className='mb-6'>&nbsp;  Your easy growing experience is our guarantee <br /> Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                        <p>&nbsp;  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Story