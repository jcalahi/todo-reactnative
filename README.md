# TODO App for IOS

This sample app is built using React Native and Redux.

#Instructions:

1. Clone the repo
2. Go to root project folder then run 'npm install'
3. On the same directory, type 'react-native run-ios'

#Todo:

1. Wrap Swipeable items into ListView

#Note:
If you encountered an error saying development server is not running, go to IOS folder > TodoProject then look for AppDelegate.m

Look for jsCodeLocation = [NSURL URLWithString:@"http://192.168.254.110:8081/index.ios.bundle?platform=ios&dev=true"];
and replace 192.168.254.110 with your local ip address.