import { blogPostCard } from "@constants";
import blogBanner from "@assets/blogBanner.jpg";
import Image from "next/image";

const page = ({ params }) => {
  const id = params.id;

  const post = blogPostCard.find((postCard) => postCard.id === Number(id));

  return (
    <div className="lg:px-24 md:px-16 px-8 pb-8 ">
      <Image
        src={blogBanner}
        alt="blog Image"
        className="w-full h-[200px] lg:h-[350px]"
      />

      <div className="py-12">
        <h1 className="font xl:text-[56px] lg:text-[42px] md:text-[56px] text-[32px] text-center font-extrabold sm:leading-[72px] md:mb-4  mb-3">
          {post.title}
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center font text-lg lg:text-2xl text-gray-600">
          <div className="mx-2 mb-2">{post.author}</div>

          <div className="flex justify-center lg:flex-row mb-2">
            <div className="mx-2">12th Aug, 2023</div>
            <div className="mx-2">{post.time}</div>
          </div>
        </div>

        <div>
          <p className="font text-lg lg:px-28 my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            commodi, ducimus veniam ipsam dolorem maiores quibusdam illum
            dignissimos assumenda cumque nisi ipsa possimus quas at, quod velit.
            Autem totam debitis explicabo eum architecto iste, omnis cupiditate
            ratione beatae nesciunt veniam temporibus fugiat nobis voluptatibus
            molestiae? Aliquid neque eius soluta maxime?
          </p>

          <p className="font text-lg lg:px-28 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            corporis atque. Tempore officiis ex vitae similique. Nostrum omnis
            vero doloremque alias dolore mollitia maiores totam tenetur eius!
            Molestiae delectus aspernatur qui nisi soluta, amet at natus
            possimus nemo deserunt numquam exercitationem nesciunt! Ad corporis
            placeat velit maiores voluptatem commodi. Eligendi incidunt dolore
            tenetur amet eius quae nobis expedita nostrum nulla non consequuntur
            necessitatibus repellat, sapiente numquam cumque pariatur temporibus
            ullam?
          </p>

          <p className="font text-lg lg:px-28 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sunt praesentium libero pariatur corrupti odit animi! Aliquam
            necessitatibus incidunt quo officia nam, veniam fugit, dolore sequi
            nemo veritatis impedit aliquid iusto vel, mollitia asperiores!
            Maiores, odio repellat. Mollitia, aperiam unde!
          </p>

          <p className="font text-lg lg:px-28 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            distinctio non voluptatum quo dolore quis quibusdam esse deserunt
            autem impedit officia, nihil et consequatur ab quam nulla alias
            dolorem expedita, in vero vel! Delectus maxime vero eligendi nisi at
            fugit expedita. Quibusdam porro placeat repudiandae earum aspernatur
            illo? Animi ea nesciunt qui expedita. Sit aut reiciendis
            necessitatibus asperiores repellendus. Eligendi fugit rem reiciendis
            et fugiat debitis, ut in perspiciatis quo ipsam ex quis beatae culpa
            obcaecati odit dolorum earum aspernatur, quos asperiores facere
            minima aliquid sapiente! Blanditiis, perferendis dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
