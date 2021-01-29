import React from "react";
import humanizeDuration from "humanize-duration";

interface Props {
  from: string;
  to?: string;
}

export default function Duration(props: Props) {
  return (
    <i>
      ({" "}
      {humanizeDuration(
        Date.parse(props.to || new Date().toString()) - Date.parse(props.from),
        {
          largest: 2,
          delimiter: " ",
          round: true,
        }
      )}{" "}
      )
    </i>
  );
}
