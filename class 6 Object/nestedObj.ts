type Book=
{
    author:Author
   name:string 
}
type Author={firstName:string,
    lastName:string}

    const book:Book={
        author:{
            firstName:"muhammad sarwar",
            lastName:"yousaf"
        },
        name:"My favorite book"
    }
    console.log(book.author.firstName)
    console.log(book["author"]["lastName"]);
    