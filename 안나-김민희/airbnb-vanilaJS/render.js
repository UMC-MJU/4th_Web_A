import rooms from "./data/rooms.js";
import types from "./data/types.js";

const renderType = (types) => {
  const typeWrapper = document.querySelector(".type__wrapper");
  const typeList = types;
  console.log("typeList:", typeList);

  let divTemp = "";
  for (let i = 0; i < typeList.length; i++) {
    divTemp += `
    <div class="type__item">
      <img
        class="type__item__icon"
        src=${typeList[i].type_imgSrc}
      />
      <div class="type__item__description">${typeList[i].type_description}</div>
    </div>`;
  }

  typeWrapper.innerHTML += divTemp;
};

const renderRoom = (rooms) => {
  const roomWrapper = document.querySelector(".room");
  const roomList = rooms;

  let divTemp = "";
  for (let i = 0; i < roomList.length; i++) {
    divTemp += `
    <div class="room__item">
      <div class="room__item__imgBox">
        <img
          class="imgBox"
          src=${roomList[i].img}
        />
        <img
          class="imgBox__like"
          src="https://pixlok.com/wp-content/uploads/2021/12/Instagram-Like-Icon-03brf3.png"
        />
      </div>
      <div class="room__item__textBox">
        <div class="textBox__1">
          <div class="textBox__1__loc">${roomList[i].loc}</div>
          <div class="textBox__1__star">★ ${roomList[i].star}</div>
        </div>
        <div class="textBox__2">${roomList[i].plus}</div>
        <div class="textBox__2">${roomList[i].when}</div>
        <div class="textBox__3">₩${roomList[i].price.toLocaleString(
          "ko-KR"
        )} /${roomList[i].standard}</div>
      </div>
    </div>`;
  }

  roomWrapper.innerHTML += divTemp;
};

renderType(types);
renderRoom(rooms);
