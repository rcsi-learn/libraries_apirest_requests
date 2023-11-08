type Props = {
  ReqResponse: string;
};

export const ResponseContainer = ({ ReqResponse }: Props) => {
  console.log(ReqResponse);
  //ReqResponse = ReqResponse.replace(/\\"/g, '"').replace(/"\\n\s+/g, "");
  return (
    <div>
      <pre style={{ textAlign: "left" }}>{ReqResponse}</pre>
    </div>
  );
};
