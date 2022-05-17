import React from 'react'
import './styles/Testimonials.css'
import t1 from './assets/nki.jpg'
import t2 from './assets/nki1.jpg'
import t3 from './assets/nki2.jpg'


const Testimonials = () => {
    return (
        <section className='testimonials'>
            <h1>Testimoinal</h1>
            <div className="cart-container">
                <div className="cart">
                    <img src={t1} alt="" />
                    <p>Lerry H</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi fugiat incidunt, exercitationem illo non. Ipsum reiciendis unde quisquam eos? Quo corrupti voluptatibus doloremque, quos explicabo necessitatibus. Molestiae eius animi rerum hic earum tenetur esse Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos non aspernatur dolorum ipsum corrupti, nihil, sunt veniam, eum fuga dicta ipsa reiciendis doloribus ullam expedita ad quod. Iste, sugaenese vitae..</h5>
                </div>

                <div className="cart">
                    <img src={t2} alt="" />
                    <p>Jessica Luis</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi fugiat incidunt, exercitationem illo non. Ipsum reiciendis unde quisquam eos? Quo corrupti voluptatibus doloremque, quos explicabo necessitatibus. Molestiae eius animi rerum hic earum tenetur esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto maiores quia tenetur placeat, assumenda pariatur incidunt quis! Minus quas accusamus explicabo nostrum suscipit aperiam pariatur.</h5>
                </div>

                <div className="cart">
                    <img src={t3} alt="desrt" />
                    <p>Hannah K</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi fugiat incidunt, exercitationem illo non. Ipsum reiciendis unde quisquam eos? Quo corrupti voluptatibus doloremque, quos explicabo necessitatibus. Molestiae eius animi rerum hic earum tenetur esse Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, voluptate inventore veniam aliquid sed quia ea doloribus repellat at laudantium sequi. Nam reiciendis dolore, quo expedita incidunt corrupti</h5>
                </div>

            </div>
        </section>
    )
}

export default Testimonials