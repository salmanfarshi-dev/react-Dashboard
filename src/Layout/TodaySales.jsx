import React from 'react'
import ContentHeading from '../Components/ContentHeading'

function TodaySales() {
  return (
    <section>
        <div className="grid grid-cols-12 gap-3.5">
            <div className="col-span-8  bg-primary2 rounded-[10px] px-4 py-5">
                <ContentHeading tittle="Today's Sales" pera="Sales Summary"/>
            </div>


            <div className="col-span-4 bg-primary2 rounded-[10px] px-4 py-5">
                <ContentHeading tittle="Level"/>

            </div>
        </div>
    </section>
  )
}

export default TodaySales