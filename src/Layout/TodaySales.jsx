import React from "react";
import ContentHeading from "../Components/ContentHeading";
import salesData from "../SalesData";

function TodaySales() {
  return (
    <section>
      <div className="grid grid-cols-12 gap-3.5">
        <div className="col-span-8  bg-primary2 rounded-[10px] px-4 py-5">
          <ContentHeading tittle="Today's Sales" pera="Sales Summary" />

          <div className="grid grid-cols-12 gap-3 mt-5 md:mt-10">
            {salesData &&
              salesData.map((data) => {
                const Icon = data.icon;

                return (
                  <div
                    className="bg-primary1 px-4 py-3 col-span-6 md:col-span-3 rounded-[10px]"
                    key={data.id}
                  >
                    <div style={{ color: data.color }}>
                      <Icon className="size-4 md:size-6"/>
                    </div>

                    <div className="mt-2 md:mt-4 flex flex-col gap-y-1">
                      <h3 className="font-semibold text-[12px] md:text-[15px] text-white">
                        {data.sale}
                      </h3>

                      <p className="text-[8px] md:text-[10px] text-grayText font-medium">
                        {data.title}
                      </p>

                      <span
                        style={{ color: data.color }}
                        className="text-[6px] md:text-[8px] font-medium"
                      >
                        {data.des}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-span-4 bg-primary2 rounded-[10px] px-4 py-5">
          <ContentHeading tittle="Level" />
        </div>
      </div>
    </section>
  );
}

export default TodaySales;
