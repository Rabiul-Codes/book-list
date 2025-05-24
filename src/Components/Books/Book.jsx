


const Book = ({book}) => {
  const {id,title,author,genre,price,rating,published,img,tags,description,review}=book;
  // console.log(tags)

  const HandelShowDetails=()=>{
     console.log('clicked',id)
  }
    return (
        <div onClick={HandelShowDetails}>
            <div className="card bg-base-300 w-96 h-[500px] shadow-lg">
  <figure>
    <img
      src={img}
      alt="book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {title}
      <div className="badge badge-secondary">{author}</div>
    </h2>
    <p>{review}</p>
    <div className="card-actions justify-end">
    
     <div className="flex gap-1">
      <hr className="border-t-2 border-red-500 my-4" />
       <div>
       </div>
             {
            tags.map((tag,i) =><div key={i} className="badge badge-outline font-semibold 
              text-xl text-[#23BE0A] border-none px-4  bg-[#235a0a0d]">{tag}</div>)
          }
     </div>
     
      <div className="badge badge-outline">{price}$</div>
    </div>
  </div>
</div>
        </div>

    );
};

export default Book;