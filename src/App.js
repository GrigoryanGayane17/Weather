import React, {useState} from 'react';

function App(props) {
    const [value, setValue] = useState('')
    let lon
    let lat
    const lonAndLen = async () => {
        const resLaTLon = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=b05c48dc7af7a4871fb96d46b62056ad`)
            .then(response => response.json())  // Convert response to JSON
            .then(data => {
                lon = data[0].lon;
                lat = data[0].lat
            })    // Log the actual data
            .catch(error => console.error("Error fetching data:", error));

        console.log(lat, lon)

        const resData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b05c48dc7af7a4871fb96d46b62056ad`)
            .then(response => response.json())  // Convert response to JSON
            .then(data => {
                console.log(data)
            })    // Log the actual data
            .catch(error => console.error("Error fetching data:", error));
    }


    return (<div>
        <form onSubmit={(ev) => ev.preventDefault()}>
            <input onChange={(ev) => setValue(ev.target.value)} placeholder={'lalala'}/>
            <button onClick={() => lonAndLen()}>click</button>
            <button>clivk</button>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis cumque dolorem eius
                fugit inventore labore laboriosam magnam, maiores maxime, nisi perferendis quas repudiandae
                voluptatem voluptatum! At illo maxime recusandae!
            </div>
            <div>Ad aliquam animi consectetur dolorem eos exercitationem iste itaque laboriosam nam natus non
                numquam odit, possimus quae quidem ratione reiciendis repudiandae, sed ullam ut. Atque cum ea
                provident sed sequi.
            </div>
            <div>Assumenda corporis dolores dolorum earum eligendi explicabo fugit impedit in, laudantium libero
                magnam molestiae nam natus neque nihil praesentium qui quia quo repellendus rerum sapiente, vel
                voluptates, voluptatum! Aut, ea.
            </div>
            <div>Culpa deleniti dolores doloribus maiores necessitatibus nesciunt quisquam quo recusandae
                repudiandae tempora! Consequuntur, reprehenderit, temporibus. Adipisci, dignissimos doloremque eius,
                error excepturi magni officia, optio perferendis placeat provident quibusdam quo velit?
            </div>
            <div>A delectus eius eligendi exercitationem facere laborum necessitatibus nobis odit officiis pariatur
                possimus quaerat quam quasi quod ratione rem repellendus, repudiandae tenetur veniam vitae. Autem
                explicabo placeat quas quibusdam reiciendis!
            </div>
            <div>Accusantium at consequatur culpa cumque distinctio doloribus dolorum est eum eveniet facilis fuga,
                illo iure laborum molestiae, obcaecati odit, porro possimus praesentium quos ratione repellat
                repudiandae sequi sunt tempore veniam.
            </div>
            <div>Adipisci aliquid asperiores dignissimos doloribus error optio quis recusandae repudiandae vero.
                Culpa cupiditate eaque eligendi est eum harum ipsa, laboriosam maxime natus praesentium quas,
                reiciendis sed? Cum doloremque molestiae quia?
            </div>
            <div>Aliquid animi assumenda culpa cum debitis deleniti earum eos error et eum ex exercitationem iste
                laborum, nesciunt officiis quisquam ratione recusandae repellendus sed sequi sint sit tempore!
                Accusamus, eaque ullam.
            </div>
            <div>Alias assumenda consequuntur corporis cum distinctio dolor ea, earum error id illum impedit minus
                nemo nesciunt nobis porro possimus provident quae quaerat, quam quas quibusdam, recusandae sapiente
                ullam veniam voluptatem.
            </div>
            <div>A dicta magni minima minus! Aperiam at delectus fugiat nostrum sed sit! A cumque distinctio eius,
                iusto nulla recusandae reiciendis similique? Aliquid dignissimos error laudantium mollitia nostrum
                porro quam voluptatem.
            </div>
            <div>Atque consectetur consequuntur dicta, nam nisi sit soluta vero. Aperiam beatae consequatur
                distinctio dolores eos esse in ipsam iste minima nostrum odio omnis quidem, quisquam, repellendus
                sunt temporibus tenetur, vel?
            </div>
            <div>Ad culpa dignissimos doloremque error ex, facere iste mollitia necessitatibus neque optio
                perferendis quia quidem quisquam quo reprehenderit saepe tenetur vel veniam vero voluptatibus!
                Adipisci aut et expedita qui quos.
            </div>
            <div>Amet architecto at cumque dolorum molestiae omnis placeat tenetur. Animi, aperiam architecto autem
                consectetur distinctio error illum laborum, molestias nam nemo nesciunt officia quaerat quia vel
                velit veritatis voluptatem. Dolore.
            </div>
            <div>Autem, ipsa iste iusto modi molestias quidem unde voluptas. Ab aliquid aut blanditiis deleniti
                ducimus ex iusto magnam natus placeat qui quibusdam rem repellendus sapiente tempora tempore, totam
                unde voluptates!
            </div>
            <div>Cumque fuga nesciunt nostrum quaerat temporibus? Aperiam aut autem consequatur corporis deleniti
                deserunt ea, eius fuga fugiat illo itaque iusto labore, laborum mollitia quaerat quos rerum
                similique sunt vitae voluptatem?
            </div>
            <div>Deserunt praesentium quisquam quo sit tempore. Aliquam aperiam asperiores consectetur cumque dolore
                eaque error expedita ipsa laboriosam laudantium minima, nemo officia, qui quia sed. Atque cupiditate
                minima odit porro recusandae?
            </div>
            <div>Aspernatur, dicta doloremque error magni minima unde? Ab adipisci animi assumenda dolor dolore
                eligendi fugit iusto nam nostrum omnis quos sed soluta ut voluptates, voluptatum. Consectetur
                debitis eligendi magnam nam.
            </div>
            <div>Accusantium amet at aut autem blanditiis dolore dolorum ducimus eos expedita, explicabo facilis
                ipsum itaque mollitia odio porro provident reiciendis rem repellendus rerum similique tempore
                tenetur vel veniam veritatis voluptate.
            </div>
            <div>Ad aliquam aspernatur cum debitis doloremque, dolores earum id incidunt laborum minus molestiae
                nesciunt quaerat rem sint totam? Animi aperiam blanditiis consequatur dolorem impedit ipsum modi,
                nemo numquam perferendis repudiandae!
            </div>
            <div>Adipisci aperiam architecto aspernatur atque doloribus enim error est facilis impedit ipsam laborum
                libero minima nam, nulla obcaecati odio possimus praesentium quasi soluta, tempore temporibus
                tenetur unde velit veniam veritatis!
            </div>
            <div>A beatae, consequatur dolorum eum excepturi fugit harum in ipsum iste iure laboriosam laborum
                nesciunt nostrum, odio pariatur, quibusdam quos rerum vero vitae voluptate? Dolor eaque et eveniet
                molestiae odio?
            </div>
            <div>Animi aspernatur distinctio ea eligendi eos eum eveniet ex exercitationem, expedita fugit ipsum
                itaque laboriosam, libero molestiae mollitia omnis perspiciatis placeat quia reiciendis repellat
                sequi sint suscipit velit voluptate voluptatum.
            </div>
            <div>Adipisci aperiam delectus mollitia porro quidem saepe tempore velit? Aliquam architecto asperiores
                beatae dicta eligendi est et facere, illo officiis praesentium quaerat quod sed sint tempore
                voluptate? Mollitia, quis sint?
            </div>
            <div>A architecto asperiores at, autem corporis dolores exercitationem fugiat impedit iste, itaque iure
                neque, praesentium ratione sapiente soluta temporibus velit voluptates. Amet aut blanditiis
                consequatur libero nostrum nulla praesentium recusandae.
            </div>
            <div>Consectetur distinctio sapiente soluta voluptatem voluptatibus. Blanditiis cupiditate distinctio,
                dolorem fugit harum quaerat totam. Ab, aliquid consectetur cum, dolor ex laboriosam magni maiores
                maxime obcaecati optio perspiciatis rerum tempore voluptates!
            </div>
        </form>
    </div>);
}

export default App;