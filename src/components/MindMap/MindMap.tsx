import React, { useEffect, useContext, ChangeEvent } from 'react';
import { observer } from 'mobx-react';

import storeContext from 'stores/globalStore';
import { ThoughtElement } from 'components/ThoughtElement';
import { MiniMap } from 'components/MiniMap';
import { ThoughtsContainer } from 'components/ThoughtsContainer';
import { ButtonUploadFIle } from 'components/ButtonUploadFIle';
import { IconDownload } from 'components/Icons/IconDownload';
import { SavedStateType } from 'types/baseTypes';
import * as Input from 'input';
import * as Styled from './MindMap.styled';

export const MindMap: React.FC = observer(() => {
    const store = useContext(storeContext);

    const onMouseDown = (event: MouseEvent): void => {
        Input.onMouseDownHandler(event, store);
    };
    const onMouseUp = (event: MouseEvent): void => {
        Input.onMouseUpHandler(event, store);
    };
    const onMouseMove = (event: MouseEvent): void => {
        Input.onMouseMoveHandler(event, store);
    };
    const onPressKey = (event: KeyboardEvent): void => {
        Input.onPressKeyHandler(event, store);
    };
    const onReleaseKey = (event: KeyboardEvent): void => {
        Input.onReleaseKeyHandler(event, store);
    };

    useEffect(() => {
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('keydown', onPressKey);
        document.addEventListener('keyup', onReleaseKey);

        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('keydown', onPressKey);
            document.removeEventListener('keyup', onReleaseKey);
        };
    });

    const uploadSavedMindMap = (event: ChangeEvent): void => {
        const target = event.target as HTMLInputElement;
        if (target && target.files && target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                const payload = reader.result as string;
                if (payload && typeof payload === 'string') {
                    const result: SavedStateType = JSON.parse(payload);
                    store.isDrawingLocked = true;
                    store.loadUploadedMindMap(result);
                }
            });

            reader.readAsText(target.files[0]);
        }
    };

    return (
        <Styled.MindMap id="mindmap">
            <Styled.Tools>
                <Styled.Button download="MindMap.json" href={`data: ${store.savedMindMap}`}>
                    <IconDownload />
                </Styled.Button>
                <ButtonUploadFIle onChange={uploadSavedMindMap} />
            </Styled.Tools>
            <Styled.Canvas />
            <ThoughtsContainer store={store}>
                {store.thoughts.map((thought) => (
                    <ThoughtElement key={thought.id} thought={thought} />
                ))}
            </ThoughtsContainer>
            <MiniMap store={store} />
        </Styled.MindMap>
    );
});