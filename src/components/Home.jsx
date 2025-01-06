import React from 'react';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <>
            <div className="gradient-background">
                <div className="glass-container" style={{ top: '80px', left: 'calc(10dvw)', color: '#fff', width: 'calc(75dvw - 80px)', padding: '20px' }}>
                    <h2>Welcome!</h2>
                    <p>This is a placeholder text</p>
                </div>
            </div>
            <div className="page-container">
                <Typography variant="h3">Welcome Home!</Typography>
                <Typography variant="body1" sx={{ marginTop: '15px' }}>This is the home page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est enim, suscipit non velit mollis, pellentesque molestie nisi. Curabitur porttitor aliquet diam, at porttitor augue finibus eget. Praesent id tempus leo. Nunc rhoncus feugiat enim, vel maximus odio semper sit amet. Donec porta, dolor efficitur malesuada congue, nibh felis imperdiet augue, sit amet suscipit ligula libero id lectus. In sollicitudin odio ac pellentesque aliquet. Vestibulum placerat, justo ut convallis maximus, lorem diam rhoncus dui, id vestibulum erat metus a diam. Fusce faucibus ultrices sem, id gravida neque placerat sed.

                    Quisque ac justo id felis venenatis bibendum. Morbi sit amet eros in lorem laoreet hendrerit. Vivamus eleifend posuere nisl in lobortis. Morbi et sapien pulvinar, venenatis odio id, placerat risus. Aliquam erat volutpat. Nunc pharetra ornare sem, at ullamcorper diam placerat at. Phasellus at euismod leo, eget fringilla lorem. Sed feugiat suscipit lacus, non pellentesque nisi efficitur condimentum. Nunc eget bibendum lacus, id dapibus ipsum. Cras dignissim ex id nibh consectetur feugiat. Aenean porta diam lobortis, commodo massa a, tempor lorem. Nullam nec varius ex. Maecenas placerat viverra ipsum, vitae condimentum dolor consectetur a. Quisque a augue at leo vulputate tincidunt nec sodales nibh.

                    Vivamus auctor at tortor quis interdum. Sed et turpis a elit maximus vulputate. Donec tincidunt lacus vel leo cursus sodales. Vestibulum maximus interdum nisi, vitae porta dolor. Proin sed molestie nisi. Aliquam auctor, erat at tristique bibendum, leo purus congue est, ut fermentum nisl lorem mattis urna. Nulla neque turpis, elementum et sodales quis, interdum et dui. Fusce magna ex, malesuada vel rutrum sed, vehicula non mi. Proin sodales libero non urna viverra tempus. Donec eu dignissim eros.

                    Sed nisl justo, rhoncus pharetra mauris et, semper viverra quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed felis magna, gravida sed cursus in, efficitur id quam. Aliquam varius ultricies ligula, et ornare nisi suscipit sit amet. In sed elit eu purus sodales luctus. Proin ut congue erat, vel placerat quam. Pellentesque id ex volutpat, sagittis elit non, egestas erat. Etiam porta consectetur feugiat. Aliquam dapibus diam sed gravida feugiat. Vivamus consectetur tortor nulla, vitae sagittis elit commodo et. Mauris tempor facilisis orci eget aliquet. Praesent non finibus nisi. Fusce bibendum ipsum purus, eu convallis nisi ultricies eget. Pellentesque eu dui dapibus, porttitor dolor eu, mollis ante. Aenean rutrum, felis a rhoncus laoreet, erat nulla rutrum neque, sit amet fermentum nisi metus non lacus. Aliquam hendrerit velit et massa interdum iaculis.

                    Quisque tincidunt tortor nec nisi consectetur interdum. Maecenas id ante imperdiet, cursus nulla in, suscipit enim. Nam maximus congue sem vitae tristique. In lobortis turpis vitae nunc scelerisque ornare. Curabitur commodo orci velit, sed bibendum turpis maximus ac. Etiam diam odio, congue non luctus eget, hendrerit ut dolor. Mauris non mauris at nulla malesuada iaculis. Suspendisse et eleifend erat, et vehicula orci. Praesent ultricies urna id pellentesque sagittis. Aenean mauris tellus, sagittis sed sapien eget, convallis laoreet quam. In sit amet nulla justo. Curabitur sollicitudin urna id purus vehicula tristique. Vestibulum feugiat luctus dignissim. Duis eget metus vel nisl fermentum luctus. In nec fermentum massa.</Typography>
            </div>
        </>
    );
}

export default Home;