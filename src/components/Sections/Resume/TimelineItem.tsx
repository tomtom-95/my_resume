import { FC, memo } from 'react';
import { TimelineItem as TimelineItemType } from '../../../data/dataDef';

const TimelineItem: FC<{ item: TimelineItemType }> = memo(({ item }) => {
  const { title, date, location, grade, highlights } = item;

  return (
    <div className="flex flex-col pb-5 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-1"> {/* Ridotto lo spazio sotto il titolo */}
        <h2 className="text-xl font-bold text-primary">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start text-gray-600 text-sm pb-1">
          <span>{date}</span>
          <span>•</span>
          <span className="font-medium italic">{location}</span>
          {grade && (
            <>
              <span>•</span>
              <span>{`Grade: ${grade}`}</span>
            </>
          )}
        </div>
      </div>

      {/* Highlights con meno margine sopra */}
      {highlights.length > 0 && (
        <ul className="list-disc list-inside text-gray-700 text-sm mt-1 ml-4 space-y-1">
          {highlights.map((point, index) => (
            <li key={index} className="leading-relaxed">{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
