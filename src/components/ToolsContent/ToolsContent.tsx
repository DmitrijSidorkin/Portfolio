import { IntroCard } from "./IntroCard/IntroCard";
import { ToolCard } from "./ToolCard/ToolCard";
import { toolsData } from "./ToolCard/ToolsData";

export const ToolsContent = () => {
  return (
    <div className="flex flex-col max-w-screen-lg gap-5 p-4">
      <IntroCard />
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
