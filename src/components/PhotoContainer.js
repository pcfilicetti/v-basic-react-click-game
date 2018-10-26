import React from 'react';
import Photo from './Photo.js';

class PhotoContainer extends React.Component {
    state = {
        photoURLs: [{
            id: 1,
            url: 'http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw07ab65d9/images/products/vegetables/03286_01_dulcina.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196',
            clicked: false
        },
        {
            id: 2,
            url: 'http://images.media-allrecipes.com/userphotos/960x960/4578474.jpg',
            clicked: false
        },
        {
            id: 3,
            url: 'https://www.culinaryhill.com/wp-content/uploads/2017/10/Chipotle-Pinto-Beans-Copycat-Culinary-Hill-3-660x660.jpg',
            clicked: false
        },
        {
            id: 4,
            url: 'https://www.bushbeans.com/sites/default/files/product-shelf/product-landing-hero-baked_0-2.png',
            clicked: false
        },
        {
            id: 5,
            url: 'https://woodlandfoods.com/img/WF_Images/B12-swedish-brown-beans-main.jpg',
            clicked: false
        },
        {
            id: 6,
            url: 'https://i1.wp.com/thekitchengirl.com/wp-content/uploads/Cook-Dry-Beans-in-2-Hours-No-Soaking-No-Instant-Pot-No-Crockpot-The-Kitchen-Girl_06.jpg?fit=680%2C680&ssl=1',
            clicked: false
        },
        {
            id: 7,
            url: 'https://d213sdapb08052.cloudfront.net/assets/recipes/green-beans-gremolata/_entryTopPhotoMobile/Page-168-web-horizon.jpg?mtime=20160725145139',
            clicked: false
        },
        {
            id: 8,
            url: 'https://www.kitchenkneads.com/wp-content/uploads/2016/06/dried-light-red-kidney-beans-20-lbs.jpg',
            clicked: false
        },
        {
            id: 9,
            url: 'https://www.rachaelraymag.com/.image/t_share/MTQ5MTcxMjIwMDg3MDU1ODEz/beef-kidney-bean-chili-102783100.jpg',
            clicked: false
        },
        {
            id: 10,
            url: 'https://www.tasteofhome.com/wp-content/uploads/2018/04/Three-Bean-Baked-Beans_EXPS_SDAM17_9008_D12_07_8b-696x696.jpg',
            clicked: false
        },
        {
            id: 11,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZIezL9cUKM9rR65vS5UyyL8xJMUXhYv_MyBkHM1LU6PD1ZjI',
            clicked: false
        },
        {
            id: 12,
            url: 'https://images.heb.com/is/image/HEBGrocery/000444186-1?id=efRRN2&fmt=jpg&fit=constrain,1&wid=296&hei=296',
            clicked: false
        },
        {
            id: 13,
            url: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps8127_HSC143552C08_01_2b.jpg',
            clicked: false
        },
        {
            id: 14,
            url: 'https://detoxinista.com/wp-content/uploads/2017/06/how-to-cook-black-beans-pressure-cooker-500x500.jpg',
            clicked: false
        },
        {
            id: 15,
            url: 'https://www.theblackpeppercorn.com/wp-content/uploads/2012/04/Mexican-Pinto-Beans-overhead.jpg',
            clicked: false
        }   
        ],
        defaultURLs: [{
            id: 1,
            url: 'http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw07ab65d9/images/products/vegetables/03286_01_dulcina.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196',
            clicked: false
        },
        {
            id: 2,
            url: 'http://images.media-allrecipes.com/userphotos/960x960/4578474.jpg',
            clicked: false
        },
        {
            id: 3,
            url: 'https://www.culinaryhill.com/wp-content/uploads/2017/10/Chipotle-Pinto-Beans-Copycat-Culinary-Hill-3-660x660.jpg',
            clicked: false
        },
        {
            id: 4,
            url: 'https://www.bushbeans.com/sites/default/files/product-shelf/product-landing-hero-baked_0-2.png',
            clicked: false
        },
        {
            id: 5,
            url: 'https://woodlandfoods.com/img/WF_Images/B12-swedish-brown-beans-main.jpg',
            clicked: false
        },
        {
            id: 6,
            url: 'https://i1.wp.com/thekitchengirl.com/wp-content/uploads/Cook-Dry-Beans-in-2-Hours-No-Soaking-No-Instant-Pot-No-Crockpot-The-Kitchen-Girl_06.jpg?fit=680%2C680&ssl=1',
            clicked: false
        },
        {
            id: 7,
            url: 'https://d213sdapb08052.cloudfront.net/assets/recipes/green-beans-gremolata/_entryTopPhotoMobile/Page-168-web-horizon.jpg?mtime=20160725145139',
            clicked: false
        },
        {
            id: 8,
            url: 'https://www.kitchenkneads.com/wp-content/uploads/2016/06/dried-light-red-kidney-beans-20-lbs.jpg',
            clicked: false
        },
        {
            id: 9,
            url: 'https://www.rachaelraymag.com/.image/t_share/MTQ5MTcxMjIwMDg3MDU1ODEz/beef-kidney-bean-chili-102783100.jpg',
            clicked: false
        },
        {
            id: 10,
            url: 'https://www.tasteofhome.com/wp-content/uploads/2018/04/Three-Bean-Baked-Beans_EXPS_SDAM17_9008_D12_07_8b-696x696.jpg',
            clicked: false
        },
        {
            id: 11,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZIezL9cUKM9rR65vS5UyyL8xJMUXhYv_MyBkHM1LU6PD1ZjI',
            clicked: false
        },
        {
            id: 12,
            url: 'https://images.heb.com/is/image/HEBGrocery/000444186-1?id=efRRN2&fmt=jpg&fit=constrain,1&wid=296&hei=296',
            clicked: false
        },
        {
            id: 13,
            url: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps8127_HSC143552C08_01_2b.jpg',
            clicked: false
        },
        {
            id: 14,
            url: 'https://detoxinista.com/wp-content/uploads/2017/06/how-to-cook-black-beans-pressure-cooker-500x500.jpg',
            clicked: false
        },
        {
            id: 15,
            url: 'https://www.theblackpeppercorn.com/wp-content/uploads/2012/04/Mexican-Pinto-Beans-overhead.jpg',
            clicked: false
        }   
        ],
        score: 0,
        topScore: 0
    };

    mixThemUp = () => {
        let rearrangeIt = this.state.photoURLs;

        for (var i = rearrangeIt.length-1; i >=0; i--) {
     
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = rearrangeIt[randomIndex]; 
             
            rearrangeIt[randomIndex] = rearrangeIt[i]; 
            rearrangeIt[i] = itemAtIndex;
        }

        this.setState({
            photoURLs: rearrangeIt
        });
    }

    clickEvent = (event) => {
        event.preventDefault();
        if (this.state.score > this.state.topScore) {
            this.setState({
                topScore: this.state.score
            });
        }
        const target = event.target.alt;
        const result = this.state.photoURLs[target - 1].clicked;
        if (result) {
            this.setState({
                score: 0,
                photoURLs: this.state.defaultURLs
            });
        } else {
            let sub = this.state.photoURLs;
            let subObj = sub[target - 1];
            subObj.clicked = true;
            sub.splice(target - 1, 1);
            sub.push(subObj);
            this.setState({
                score: this.state.score + 1,
                photoURLs: sub
            });
        }
        if (this.state.score > this.state.topScore) {
            this.setState({
                topScore: this.state.score
            });
        }
        this.mixThemUp();
    }

    render() {
        return (
            <div className="row">
                <h1 className="col-sm-12">Score: {this.state.score}</h1>
                <br />
                <h1 className="col-sm-12">Top Score: {this.state.topScore}</h1>
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[0].url} alt={this.state.photoURLs[0].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[1].url} alt={this.state.photoURLs[1].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[2].url} alt={this.state.photoURLs[2].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[3].url} alt={this.state.photoURLs[3].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[4].url} alt={this.state.photoURLs[4].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[5].url} alt={this.state.photoURLs[5].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[6].url} alt={this.state.photoURLs[6].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[7].url} alt={this.state.photoURLs[7].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[8].url} alt={this.state.photoURLs[8].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[9].url} alt={this.state.photoURLs[9].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[10].url} alt={this.state.photoURLs[10].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[11].url} alt={this.state.photoURLs[11].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[12].url} alt={this.state.photoURLs[12].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[13].url} alt={this.state.photoURLs[13].id} />
                <Photo onClick={this.clickEvent} src={this.state.photoURLs[14].url} alt={this.state.photoURLs[14].id} />
            </div>
        );
    }
}

export default PhotoContainer;