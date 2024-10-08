/*
code from https://www.javaworld.com/article/3104621/android-studio-for-beginners-part-2-explore-and-code-the-app.html
fixed some resource issue
built successfully
under android studio 3.6.1
date: 20200307
 */

package com.example.w2a;

import android.app.Activity;
import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.view.View;

import android.widget.Button;
import android.widget.ImageView;

public class w2a extends Activity {
    AnimationDrawable androidAnimation;

    // override
    public  void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.main);
        ImageView androidImage = (ImageView) findViewById(R.id.android);
        androidImage.setBackgroundResource(R.drawable.android_animate);
        androidAnimation = (AnimationDrawable) androidImage.getBackground();
        final Button btnAnimate = ( Button) findViewById(R.id.animate);
        View.OnClickListener ocl;
        ocl = new View.OnClickListener() {
            // override
            public void onClick( View v) {
                androidAnimation.stop();
                androidAnimation.start();
            }
        };
        btnAnimate.setOnClickListener( ocl);
    }
}
