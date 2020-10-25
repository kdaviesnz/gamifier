class Profile extends Component {
    constructor({match}) {
        super()
        this.state = {
            user: '',
            redirectToSignin: false
        }
        this.match = match
    }
    init = (userId) => {
        const jwt = auth.isAuthenticated()
        read({
            userId: userId
        }, {t: jwt.token}).then((data) => {
            if (data.error) {
                this.setState({redirectToSignin: true})
            } else {
                this.setState({user: data})
            }
        })
    }
    componentWillReceiveProps = (props) => {
        this.init(props.match.params.userId)
    }
    componentDidMount = () => {
        this.init(this.match.params.userId)
    }
    render() {
        const {classes} = this.props
        const redirectToSignin = this.state.redirectToSignin
        if (redirectToSignin) {
            return <Redirect to='/signin'/>
        }
        return (
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                    Profile
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Person/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={this.state.user.name} secondary={this.state.user.email}/> {
                        auth.isAuthenticated().user && auth.isAuthenticated().user._id == this.state.user._id &&
                        (<ListItemSecondaryAction>
                            <Link to={"/user/edit/" + this.state.user._id}>
                                <IconButton aria-label="Edit" color="primary">
                                    <Edit/>
                                </IconButton>
                            </Link>
                            <DeleteUser userId={this.state.user._id}/>
                        </ListItemSecondaryAction>)
                    }
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary={"Joined: " + (
                            new Date(this.state.user.created)).toDateString()}/>
                    </ListItem>
                </List>
            </Paper>
        )
    }
}
Profile.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)