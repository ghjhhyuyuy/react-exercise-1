import React from 'react';
import './List.css';
function List() {
  return (
    <ol>
      <li>
        <div>
          <p className="year bold">1990</p>
          <div className="gray marginPadding">
            <p className="half bold">I was born in Katowice</p>
            <p className="half margin">
              Lorem ipsum dolor sit amet,consectetur adipisicing
              elit.Sapiente,exercitationem,totam,dolores iste dolore est aut
              modi.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <p className="year bold">2005</p>
          <div className="gray marginPadding">
            <p className="half bold">
              Secondary school specializing ih artistic
            </p>
            <p className="half margin">
              Eos,explicabo,nam,tenetur et ab elus deserunt aspernatur ipsum
              ducimus quibusdam quis voluptatibus.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <p className="year bold">2009</p>
          <div className="gray marginPadding">
            <p className="half bold">
              Second level graduation in Graphic Design
            </p>
            <p className="half margin">
              Ducims,aliquam tempore autem itaque et accusantium!
            </p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <p className="year bold">1990</p>
          <div className="gray marginPadding">
            <p className="half bold">I was born in Katowice</p>
            <p className="half margin">
              Lorem ipsum dolor sit amet,consectetur adipisicing
              elit.Sapiente,exercitationem,totam,dolores iste dolore est aut
              modi.
            </p>
          </div>
        </div>
      </li>
    </ol>
  );
}
export default List;
