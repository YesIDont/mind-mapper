import { Vector } from 'persistance/editor/base-types';

export interface IPointer {
  isAnyButtonPressed: boolean;
  wasShiftPressedOnDown: boolean;
  position: Vector;
  lastPosition: Vector;
  draggedItemId?: string;
  getPosition(): Vector;
  setisAnyButtonPressed(isDown: boolean): void;
  getCurrentToLastPositionDiff(): Vector;
  setDraggedId(id: string): void;
  clearDraggedId(): void;
  setWasShiftPressedOnDown(isShiftPressed: boolean): void;
}

export const pointerBase: IPointer = {
  isAnyButtonPressed: false,
  wasShiftPressedOnDown: false,
  position: new Vector(),
  lastPosition: new Vector(),

  getPosition(): Vector {
    return { x: this.position.x, y: this.position.y };
  },

  setisAnyButtonPressed(isDown: boolean): void {
    this.isAnyButtonPressed = isDown;
  },

  getCurrentToLastPositionDiff(): Vector {
    return {
      x: this.position.x - this.lastPosition.x,
      y: this.position.y - this.lastPosition.y,
    };
  },

  setDraggedId(id: string): void {
    this.draggedItemId = id;
  },

  clearDraggedId(): void {
    this.draggedItemId = undefined;
  },

  setWasShiftPressedOnDown(isShiftPressed: boolean): void {
    this.wasShiftPressedOnDown = isShiftPressed;
  },
};
