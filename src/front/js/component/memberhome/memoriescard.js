import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { getMemories } from "./Engine Room/upComingApi";
import { DataBaseChange, TokenIssued } from "../../layout";

export default function TitlebarImageList() {
 const [list, setList] = React.useState([]);
 const {dataUpdate, setDataUpdate} = React.useContext(DataBaseChange)
const {token, setToken}= React.useContext(TokenIssued);
 React.useEffect(()=>{
  const fn = async () => {
    const apiList = await getMemories(token);


    return setList(apiList);
  };
  fn();



 },[dataUpdate]);
  return (
    <ImageList sx={{ width: 1500, height: 800 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {list.map((item,index) => (
        <ImageListItem key={item.dinner}>
          <img
            src={`${item.dinImg}?w=248&fit=crop&auto=format`}
            srcSet={`${item.dinimg}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.dinner}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.dinner}
            subtitle={item.dinLoc}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        
        
        
      ))}
    </ImageList>
  );
}

