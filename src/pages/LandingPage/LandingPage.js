import React from 'react';
import { useNavigate } from 'react-router';
import ipsum from '../../components/images/ipsum.jpg';
import ipsu from '../../components/images/lorem-ipsum.jpg';
import ips from '../../components/images/lorem.png';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <header>
                <hr />
                <h1>Welcome to My Website</h1>
                <hr />
            </header>
            <main>
                <section>
                    <h2>About Me</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus justo ut massa
                        luctus, eget fringilla purus ullamcorper.Contrary to popular belief, Lorem Ipsum is
                        not simply random text. It has roots in a piece of classical Latin literature from 45
                        BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                        Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                        45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary
                        of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which
                        looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                        non-characteristic words etc."But I must explain to you how all this mistaken idea of denouncing pleasure
                        and praising pain was born and I will give you a complete account of the system, and expound the actual
                        teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how
                        to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there
                        anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because
                        occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                        To take a trivial example, which of us ever undertakes laborious physical exercise, except
                        to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a
                        pain that produces no resultant pleasure?"
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                        id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                        id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                        et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                        a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                        doloribus asperiores repellat.""On the other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,
                        so blinded by desire, that they cannot foresee the pain and trouble that are bound to
                        ensue; and equal blame belongs to those who fail in their duty through weakness of will,
                        which is the same as saying through shrinking from toil and pain. These cases are perfectly
                        simple and easy to distinguish. In a free hour, when our power of choice is untrammelled
                        and when nothing prevents our being able to do what we like best, every pleasure is to be
                        welcomed and every pain avoided. But in certain circumstances and owing to the claims of
                        duty or the obligations of business it will frequently occur that pleasures have to be
                        repudiated and annoyances accepted. The wise man therefore always holds in these matters
                        to this principle of selection: he rejects pleasures to secure other greater pleasures,
                        or else he endures pains to avoid worse pains."Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                        'Content here, content here', making it look like readable English. Many desktop publishing
                        packages and web page editors now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident, sometimes
                        on purpose (injected humour and the like).
                    </p>
                </section>
                <section>
                    <h3>Services</h3>
                    <div className='parent'>
                        <ul>
                            <li>Web Design</li>
                            <li>Mobile App Development</li>
                            <li>UI/UX Consulting</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h3>Contact</h3>
                    <div className='parent'>
                        <a href="https://www.youtube.com/watch?v=3pqaEvOsN8A">Lorem ipsum</a>
                        <br />
                        <a href="tel:+ 123-456-7890">+123-456-7890</a>
                    </div>
                </section>
            </main>

            <img src={ipsu} alt="images" className='img' />
            <img src={ips} alt="images" className='img' />
            <img src={ipsum} alt="images" className='img' />
            <div className='parDivOne'>
                <footer>
                    <p>© 2023 My Website. All rights reserved.</p>
                </footer>
                <button className='btn01' onClick={() => navigate("/LoginPage")}>Login page</button>
            </div>
        </div>
    );
}

export default React.memo(LandingPage);
