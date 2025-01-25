import { Input, Typography } from "@material-tailwind/react";

export const CustomInput = ({ labelName, placeHolderName }) => {
  return (
    <>
      <div className="flex w-full flex-col py-1">
        {/* This typography is my Label */}
        <Typography variant="h6" className="p-0 m-0">
          {labelName}
        </Typography>
        <Input
          type={labelName}
          placeholder={placeHolderName}
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
      </div>
    </>
  );
};
