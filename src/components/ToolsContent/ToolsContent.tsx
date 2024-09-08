import { HashtagCard } from "./HashtagCard/HashtagCard";
import { IntroCard } from "./IntroCard/IntroCard";
import { ToolCard } from "./ToolCard/ToolCard";

const toolsData = [
  {
    image: "/github.svg",
    name: "github",
    description:
      "sono rob, e questa e una super raccolta di ottimi strumenti e siti web per qualsiasi tipo di business",
  },
  {
    image: "/github.svg",
    name: "github",
    description:
      "sono rob, e questa e una super raccolta di ottimi strumenti e siti web per qualsiasi tipo di business",
  },
  {
    image: "/github.svg",
    name: "github",
    description:
      "sono rob, e questa e una super raccolta di ottimi strumenti e siti web per qualsiasi tipo di business",
  },
  {
    image: "/github.svg",
    name: "github",
    description:
      "sono rob, e questa e una super raccolta di ottimi strumenti e siti web per qualsiasi tipo di business",
  },
  {
    image: "/github.svg",
    name: "github",
    description:
      "sono rob, e questa e una super raccolta di ottimi strumenti e siti web per qualsiasi tipo di business",
  },
  {
    image: "/github.svg",
    name: "github",
    description:
      "sono rob, e questa e una super raccolta di ottimi strumenti e siti web per qualsiasi tipo di business",
  },
  {
    image: "/github.svg",
    name: "github",
    description:
      "sono rob, e questa e una super raccolta di ottimi strumenti e siti web per qualsiasi tipo di business",
  },
];

export const ToolsContent = () => {
  return (
    <div>
      <div>
        <HashtagCard />
        <IntroCard />
      </div>
      <div className="flex flex-row flex-wrap w-full justify-center gap-8">
        {toolsData.map((data, index) => {
          return (
            <ToolCard
              key={index}
              image={data.image}
              name={data.name}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};
