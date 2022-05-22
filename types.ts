

export interface Version {
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
  }
  
export interface DappInfo {
    readonly name: string;
    readonly addresses: string[];
    readonly version: Version;
    readonly tags?: Tags;
}

export interface Tags {
    readonly [addressId: string]: {
      readonly name: string;
      readonly description: string;
    };
  }