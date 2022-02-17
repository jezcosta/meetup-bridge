//
//  RCTMeetupModule.m
//  meetupBridge
//
//  Created by Jessica Costa on 16/02/22.
//

#import <AVFoundation/AVFoundation.h>
#import "RCTMeetupModule.h"

@implementation RCTMeetupModule

//MEETUPINFO: export module to native modules
RCT_EXPORT_MODULE()

//MEETUPINFO: export native method
RCT_EXPORT_METHOD(ShowAlert:(NSString *)text duration:(int)duration)
{
  UIAlertView *alert = [[UIAlertView alloc] initWithTitle:nil
                                                  message:text
                                                 delegate:nil
                                        cancelButtonTitle:nil
                                        otherButtonTitles:nil, nil];
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [alert show];
  });
          
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, duration * NSEC_PER_MSEC), dispatch_get_main_queue(), ^{
      [alert dismissWithClickedButtonIndex:0 animated:YES];
  });
}

@end
