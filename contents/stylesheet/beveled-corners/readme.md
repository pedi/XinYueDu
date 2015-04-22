#CSS Beveled Corner Mixins for Sass

These three mixins create beveled corners, difference between the mixins are their different browser support levels, that is to say, they use different methods. They all create beveled corners in same fashion as `border-radius`. It's explained [here](http://clubmate.fi/css-beveled-corners-take-2-a-sass-mixin).

##Wins

- Works down to IE 8
- No extra elements
- Can be applied to any element like any styling
- No images or other crap

##Fails

- Margins in  the `beveled-corner-veryold()` are a bit funny (check my [blogpost](http://clubmate.fi/css-beveled-corners-take-2-a-sass-mixin) w/ demos)
- Can't have border around the box

##Usage

The following will create a gray box with a corner bevel value of `10px`:

    .module {
        @include corner-bevel-new();
    }

    .module {
        @include corner-bevel-old();
    }

    .module {
        @include corner-bevel-veryold();
    }

See my [blogpost](http://clubmate.fi/css-beveled-corners-take-2-a-sass-mixin) for more examples.

##ToDo
- Maybe make it a compass extension