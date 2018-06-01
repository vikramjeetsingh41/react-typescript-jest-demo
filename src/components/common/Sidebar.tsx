interface TodoProps {
    todo: string
    status: string
}

interface TodoState {
    isEditing?: boolean
    // Make all state optional! See Hack below
}

class TodoComponent extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);
    }
}