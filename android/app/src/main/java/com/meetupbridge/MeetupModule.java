package com.meetupbridge;
import android.widget.Toast;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

//MEETUPINFO: extends from react context
public class MeetupModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    MeetupModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }

    @Override
    public String getName(){
        return "MeetupModule"; //MEETUPINFO: register bridge module name
    }

    //MEETUPINFO: create native functions
    @ReactMethod
    public void ShowAlert(String text, int duration){
        Toast.makeText(getReactApplicationContext(), text, duration).show();
    }
}