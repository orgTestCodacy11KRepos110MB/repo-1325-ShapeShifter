import { ActionMode, ActionSource, Hover, Selection } from './types';
import { Action } from '@ngrx/store';

export const SET_ACTIVE_PATH_BLOCK_ID = '__shapeshifter__SET_ACTIVE_PATH_BLOCK_ID';
export const CLEAR_ACTIVE_PATH_BLOCK_ID = '__shapeshifter__CLEAR_ACTIVE_PATH_BLOCK_ID';
export const SET_SHAPE_SHIFTER_MODE = '__shapeshifter__SET_SHAPE_SHIFTER_MODE';
export const TOGGLE_SHAPE_SHIFTER_MODE = '__shapeshifter__TOGGLE_SHAPE_SHIFTER_MODE';
export const SET_SHAPE_SHIFTER_HOVER = '__shapeshifter__SET_SHAPE_SHIFTER_HOVER';
export const SET_SHAPE_SHIFTER_SELECTIONS = '__shapeshifter__SET_SHAPE_SHIFTER_SELECTIONS';
export const TOGGLE_SUBPATH_SELECTION = '__shapeshifter__TOGGLE_SUBPATH_SELECTION';
export const TOGGLE_SEGMENT_SELECTIONS = '__shapeshifter__TOGGLE_SEGMENT_SELECTION';
export const TOGGLE_POINT_SELECTION = '__shapeshifter__TOGGLE_POINT_SELECTION';

export class SetActivePathBlockId implements Action {
  readonly type = SET_ACTIVE_PATH_BLOCK_ID;
  readonly payload: { blockId: string };
  constructor(readonly blockId: string) {
    this.payload = { blockId };
  }
}

export class ClearActivePathBlockId implements Action {
  readonly type = CLEAR_ACTIVE_PATH_BLOCK_ID;
}

export class SetShapeShifterMode implements Action {
  readonly type = SET_SHAPE_SHIFTER_MODE;
  readonly payload: { mode: ActionMode };
  constructor(mode: ActionMode) {
    this.payload = { mode };
  }
}

export class ToggleShapeShifterMode implements Action {
  readonly type = TOGGLE_SHAPE_SHIFTER_MODE;
  readonly payload: { modeToToggle: ActionMode };
  constructor(modeToToggle: ActionMode) {
    this.payload = { modeToToggle };
  }
}

export class SetShapeShifterHover implements Action {
  readonly type = SET_SHAPE_SHIFTER_HOVER;
  readonly payload: { hover: Hover };
  constructor(hover: Hover) {
    this.payload = { hover };
  }
}

export class SetShapeShifterSelections implements Action {
  readonly type = SET_SHAPE_SHIFTER_SELECTIONS;
  readonly payload: { selections: ReadonlyArray<Selection> };
  constructor(selections: ReadonlyArray<Selection>) {
    this.payload = { selections };
  }
}

export class ToggleSubPathSelection implements Action {
  readonly type = TOGGLE_SUBPATH_SELECTION;
  readonly payload: { source: ActionSource, subIdx: number };
  // TODO: support multi-selection for subpaths
  constructor(source: ActionSource, subIdx: number) {
    this.payload = { source, subIdx };
  }
}

export class ToggleSegmentSelections implements Action {
  readonly type = TOGGLE_SEGMENT_SELECTIONS;
  readonly payload: {
    source: ActionSource,
    segments: ReadonlyArray<{ subIdx: number, cmdIdx: number }>,
  };
  // TODO: support multi-selection for segments
  constructor(source: ActionSource, segments: ReadonlyArray<{ subIdx: number, cmdIdx: number }>) {
    this.payload = { source, segments };
  }
}

export class TogglePointSelection implements Action {
  readonly type = TOGGLE_POINT_SELECTION;
  readonly payload: {
    source: ActionSource,
    subIdx: number,
    cmdIdx: number,
    appendToList: boolean,
  };
  constructor(source: ActionSource, subIdx: number, cmdIdx: number, appendToList = false) {
    this.payload = { source, subIdx, cmdIdx, appendToList };
  }
}

export type Actions =
  SetActivePathBlockId
  | ClearActivePathBlockId
  | SetShapeShifterMode
  | ToggleShapeShifterMode
  | SetShapeShifterHover
  | SetShapeShifterSelections
  | ToggleSubPathSelection
  | ToggleSegmentSelections
  | TogglePointSelection;
