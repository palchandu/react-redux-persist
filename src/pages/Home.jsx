import { Counter } from "../app/features/counter/Counter"
export const Home = () => {
  return (
      <>
          <div className='home-page'>
              <div>
                  <img src="src/assets/hero.jpg" className='home-img'/>
              </div>
              <div className='home-content'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia facere voluptates ex aut, necessitatibus nulla iure debitis odit provident fugit tempore voluptas aperiam, itaque quasi architecto eos ullam, totam quod?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dignissimos? Impedit quod vitae asperiores iusto possimus quae ratione facere quaerat velit pariatur, iste cum culpa aspernatur doloribus error, sunt harum!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem minima laboriosam nemo debitis odit nesciunt non, mollitia ex accusamus quae et soluta at necessitatibus facilis architecto nihil enim, neque qui?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse pariatur maiores minus eaque accusantium dignissimos molestiae dolor ea fugit. Sapiente voluptate nisi fugiat reprehenderit sed eveniet id assumenda aut!
              </div>
          </div>
          <Counter/>
      </>
  )
}
