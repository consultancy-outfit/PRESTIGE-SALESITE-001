import React from "react";
import { SvgIconProps } from "@mui/material";

const CheckedIcon: React.FC<SvgIconProps> = () => {
  return (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.0488281" width="28" height="28" rx="14" fill="#C3F53C" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.9457 8.67076L11.5923 16.7324L9.37568 14.3641C8.96734 13.9791 8.32568 13.9558 7.85901 14.2824C7.40401 14.6208 7.27568 15.2158 7.55568 15.6941L10.1807 19.9641C10.4373 20.3608 10.8807 20.6058 11.3823 20.6058C11.8607 20.6058 12.3157 20.3608 12.5723 19.9641C12.9923 19.4158 21.0073 9.86076 21.0073 9.86076C22.0573 8.78743 20.7857 7.84243 19.9457 8.6591V8.67076Z"
        fill="#080808"
      />
    </svg>
  );
};

export default CheckedIcon;
