// @material-tailwind-react
import {
  Card,
  Avatar,
  Button,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const myImages = [
  "https://i.ytimg.com/vi/wgLXImNDoTc/maxresdefault.jpg",
  "https://i.ytimg.com/vi/0C-hyqtV1XI/maxresdefault.jpg",
  "https://i.ytimg.com/vi/1cVvQswuWp4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBmSwwdgzuNu7fE-T67dVYK1EXwDQ",
  "https://content.jdmagicbox.com/comp/ongole/y5/9999p8592.8592.200207200030.h9y5/catalogue/coco-hub-ongole-pwtacpnvjg.jpg",
];

export function CryptoCard() {
  return (
    <Card className="overflow-hidden border border-gray-300 shadow-sm">
      <CardBody className="p-4">
        <Typography
          color="blue-gray"
          className="mb-1 !text-base !font-semibold"
        >
          #1
        </Typography>
        <div className="my-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              src="https://www.material-tailwind.com/img/avatar1.jpg"
              alt="Tina Andrew"
            />
            <div>
              <Typography color="blue-gray" variant="h6">
                Tina Andrew
              </Typography>
              <Typography variant="small" color="gray" className="font-medium">
                Creator
              </Typography>
            </div>
          </div>
          <Button size="sm" variant="outlined" className="border-gray-300">
            see collection
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {myImages.map(
            (x, y) => (
              console.log("What is in the map?", "Key:", y, "img:", x),
              (
                <img
                  key={y}
                  src={x}
                  className="h-full w-full rounded-xl object-cover"
                  alt="imgs"
                />
              )
            )
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default CryptoCard;
