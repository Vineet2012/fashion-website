import React from "react";
import { useSearchParams } from "react-router-dom";
import { sizeTableData } from "../../PAGE1/Card1/sizeTableData";

export default function SizeChartTable() {
  const [searchParams, _] = useSearchParams();
  const [sizeData, setSizeData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const sizeTable = sizeTableData.find((el) => el.id === pid);
    setSizeData(sizeTable);
  });
  return (
    <div>
      <div
        className="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                SIZE CHART
              </h1>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <p className="modal-title fs-5">In Regulars</p>
                <table className="table my-3  table-striped">
                  <thead>
                    <tr>
                      <th scope="col">{sizeData.brandSize}</th>
                      <th scope="col">{sizeData.chest}</th>
                      <th scope="col">{sizeData.shoulder}</th>
                      <th scope="col">{sizeData.length}</th>
                      <th scope="col">{sizeData.waist}</th>
                      <th scope="col">{sizeData.inseam}</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "14px" }}>
                    <tr>
                      <td>{sizeData.brandSize1}</td>
                      <td>{sizeData.chest1}</td>
                      <td>{sizeData.shoulder1}</td>
                      <td>{sizeData.length1}</td>
                      <td>{sizeData.waist1}</td>
                      <td>{sizeData.inseam1}</td>
                    </tr>
                    <tr>
                      <td>{sizeData.brandSize2}</td>
                      <td>{sizeData.chest2}</td>
                      <td>{sizeData.shoulder2}</td>
                      <td>{sizeData.length2}</td>
                      <td>{sizeData.waist2}</td>
                      <td>{sizeData.inseam2}</td>
                    </tr>
                    <tr>
                      <td>{sizeData.brandSize3}</td>
                      <td>{sizeData.chest3}</td>
                      <td>{sizeData.shoulder3}</td>
                      <td>{sizeData.length3}</td>
                      <td>{sizeData.waist3}</td>
                      <td>{sizeData.inseam3}</td>
                    </tr>
                    <tr>
                      <td>{sizeData.brandSize4}</td>
                      <td>{sizeData.chest4}</td>
                      <td>{sizeData.shoulder4}</td>
                      <td>{sizeData.length4}</td>
                      <td>{sizeData.waist4}</td>
                      <td>{sizeData.inseam4}</td>
                    </tr>
                    <tr>
                      <td>{sizeData.brandSize5}</td>
                      <td>{sizeData.chest5}</td>
                      <td>{sizeData.shoulder5}</td>
                      <td>{sizeData.length5}</td>
                      <td>{sizeData.waist5}</td>
                      <td>{sizeData.inseam5}</td>
                    </tr>
                    <tr>
                      <td>{sizeData.brandSize6}</td>
                      <td>{sizeData.chest6}</td>
                      <td>{sizeData.shoulder6}</td>
                      <td>{sizeData.length6}</td>
                      <td>{sizeData.waist6}</td>
                      <td>{sizeData.inseam6}</td>
                    </tr>
                    <tr>
                      <td>{sizeData.brandSize7}</td>
                      <td>{sizeData.chest7}</td>
                      <td>{sizeData.shoulder7}</td>
                      <td>{sizeData.length7}</td>
                      <td>{sizeData.waist7}</td>
                      <td>{sizeData.inseam7}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
