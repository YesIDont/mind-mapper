import { ObjectOfVectors, SavedStateType, Vector } from '../types/baseTypes';
import { Node } from './Node';
import { Pointer } from './pointer';

export type OverlapResult = {
  other: Node;
  amount: Vector;
  isColliding: boolean;
};

export type TAxis = 'x' | 'y';

export type TStore = /* View & */ {
  connectorsCurveDividerWidth: number;
  defaultSpawnGap: Vector;
  highlightId?: string;
  isDrawingLocked: boolean;
  isGroupDragOn: boolean;
  isInitialized: boolean;
  initialNodeWidth: number;
  rootNode: Node;
  savedMindMap: string;
  scale: number;
  selectionId?: string;
  nodes: Node[];
  pointer: Pointer;
  saveDebounceId?: NodeJS.Timeout;
  initialize(): void;
  addNode(position: Vector, isRoot?: boolean, parentId?: string, initText?: string, existingId?: string): Node;
  getNodeById(id: string): Node | undefined;
  getNewID(): string;
  getHighlightedNode(): Node | undefined;
  getSelectedNode(): Node | undefined;
  saveChildrenRelativePosition(id: string): void;
  restoreChildrenRelativePosition(id: string): void;
  getChildrenIds(parentId: string, includeGrandChildren?: boolean): string[];
  getChildren(parentId: string, includeGrandChildren?: boolean): Node[];
  addChildNode(newParentId: string, childId: string): void;
  removeChildNode(parentId: string, childToBeRemovedId: string): void;
  isParentOf(parentId: string, unknownChildId: string, includeGrandChildren?: boolean): boolean;
  isChildOf(childId: string, potentialParentId: string): boolean;
  postNewThoughActions(newSibling: Node): void;
  createChildNode(node: Node): void;
  createSiblingNode(node: Node): void;
  setHighlight(nodeId: string): void;
  clearHighlight(): void;
  setSelection(newSelectionId: string): void;
  clearSelection(): void;
  stopEditing(checkDefaultValue?: boolean): void;
  setIsGroupDragOn(isOn: boolean): void;
  removeNode(nodeId: string): void;
  removeIfEmpty(node: Node): void;
  editSelection(): void;
  isParentOnLeft(nodeId: string): boolean;
  getConnectorPoints(nodeId: string): ObjectOfVectors;
  updateSelectionContent(value: string): void;
  isOverlappingWith(node: Node, other: Node): OverlapResult;
  findOverlapsFor(node: Node): OverlapResult[];
  resolveOverlaps(node: Node, axis?: TAxis): Node;
  findClosestOverlapFor(node: Node): void;
  setPositionAsync(nodeId: string, newPosition: Vector, callback?: () => void): void;
  initPositions(): void;
  updateWorkspaceSize(): void;
  saveCurrentMindMapAsJSON(): void;
  getCurrentMindMapState(): SavedStateType;
  deserializeMindMap(saved: SavedStateType): void;
  setDrawLock(isDrawingLocked: boolean): void;
  draw(): void;
  updateSingleItem(item: Node): void;
  onMouseMove(event: MouseEvent): void;
  customOnFinishHydration(): void;
};