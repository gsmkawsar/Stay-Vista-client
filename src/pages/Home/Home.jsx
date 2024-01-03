

import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categires/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  
  return (
    <div>
      <Helmet> <title>StayVista | Vacation Homes & Condo Rentals</title></Helmet>
      {/* Categories section */}
      <Categories />

      {/* room section */}
      <Rooms />
    </div>
  )
}

export default Home
