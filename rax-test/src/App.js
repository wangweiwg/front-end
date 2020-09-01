import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import './rem.js';
import styles from './App.css';

console.log(styles)

class App extends Component {
    render() {
        return (
            <View style={styles.app}>
                <View style={styles.appHeader}>
                    <Text style={styles.appBanner}>Welcome to Rax</Text>
                </View>
                <Text style={styles.appIntro}>To get started, edit src/App.js and save to reload.</Text>
                <Text style={styles.test}>测试文档</Text>
            </View>
        )
    }
}
export default App;
