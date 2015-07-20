#import <CoreBluetooth/CoreBluetooth.h>

#import "RNBluetoothState.h"
#import "RCTEventDispatcher.h"

@interface RNBluetoothState() <CBCentralManagerDelegate>

@property(strong, nonatomic) CBCentralManager *centralManager;

@end

@implementation RNBluetoothState

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

#pragma mark Initialization

- (instancetype)init
{
    if (self = [super init]) {
        _centralManager = [[CBCentralManager alloc] initWithDelegate:self queue:dispatch_get_main_queue()];
    }
    
    return self;
}

- (NSString *) centralManagerStateToString: (int)state
{
    switch (state) {
        case CBCentralManagerStateUnknown:
            return @"unknown";
        case CBCentralManagerStateResetting:
            return @"resetting";
        case CBCentralManagerStateUnsupported:
            return @"unsupported";
        case CBCentralManagerStateUnauthorized:
            return @"unauthorized";
        case CBCentralManagerStatePoweredOff:
            return @"off";
        case CBCentralManagerStatePoweredOn:
            return @"on";
        default:
            return @"unknown";
    }
    
    return @"unknown";
}

- (void)centralManagerDidUpdateState:(CBCentralManager *)central
{
    NSString *stateName = [self centralManagerStateToString:central.state];
    [self.bridge.eventDispatcher sendDeviceEventWithName:@"centralManagerDidUpdateState" body:stateName];
}

@end
