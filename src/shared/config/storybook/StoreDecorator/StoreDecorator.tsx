import { Story } from '@storybook/react';
import { RootState, StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
