import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?:string}>;
}) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt:'Yesterday',
    views :55,
    author:{_id:1},
    _id:1,
    description:"This is a description",
    image:"https://unsplash.com/photos/black-and-gray-robot-toy-k-w-Q4RXO_k",
    category:"robots",
    title:"We robots"
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup,<br/> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions
        </p>
        <SearchForm query={query}/>
      </section>
      
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}`:'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length>0 ? (
            posts.map((post:StartupTypeCard,index:number)=>(
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">
              No Startups found
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
