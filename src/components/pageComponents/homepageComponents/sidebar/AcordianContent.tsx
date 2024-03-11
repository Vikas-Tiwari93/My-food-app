import { useNavigate } from "react-router-dom";

type ItempProps = {
  about: string;
  description: string;
  navigation: string;
};

type TitleProps = {
  topic: string;
};

export function CustomItem(data: ItempProps) {
  const navigate = useNavigate();
  console.log(data);
  return (
    <div onClick={() => navigate(`${data.navigation}`)}>
      <div>
        <p>
          <b>{data.about} </b>
        </p>
        <p>
          <span>{data.description}</span>
        </p>
      </div>
    </div>
  );
}

export function CustomTitle(data: TitleProps) {
  return <div className="header">{data.topic}</div>;
}
