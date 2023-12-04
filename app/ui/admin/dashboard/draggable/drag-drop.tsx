"use client";
import Adminchart from "@/app/ui/admin/dashboard/admin/chart";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import React, { useState } from "react";
import { AdminCharts } from "@/app/data";
import { recorder } from "@/lib/utlis";

interface Charts {
  user: string;
  chart: any;
}

const DragDrop = () => {
  const [oldCharts, setCharts] = useState<Charts[]>(AdminCharts);
  const handleDragStart = () => {
    if (window.navigator.vibrate) window.navigator.vibrate(100);
  };

  const handleDragEnd = (result: DropResult) => {
    if (result.combine) {
      const newCharts: Charts[] = [...oldCharts];
      newCharts.splice(result.source.index, 1);
      setCharts(newCharts);
    }
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const newCharts = recorder(
      oldCharts,
      result.source.index,
      result.destination.index
    );
    setCharts(newCharts);
  };

  return (
    <div
      data-testid="drag-cont"
      className="w-[100%] h-[100%] flex flex-col md:flex-row gap-[10px] overflow-hidden "
    >
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Droppable droppableId="adminChart">
          {(droppableProvided) => (
            <div
              data-testid="drag-subcont"
              className="w-[100%] h-[100%] flex overflow-hidden flex-col md:flex-row gap-[10px]"
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {oldCharts.map((value, index) => (
                <Draggable
                  draggableId={value.user}
                  index={index}
                  key={value.user}
                >
                  {(draggableProvided) => (
                    <div
                      data-testid="drag"
                      className="w-[100%] h-[100%] flex flex-col md:flex-row gap-[10px]"
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      ref={draggableProvided.innerRef}
                    >
                      {value.chart}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
