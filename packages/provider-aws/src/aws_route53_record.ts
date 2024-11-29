import { TerraformConfig, TerraformResource } from "tfs";
export interface Alias {
  evaluate_target_health: boolean;
  name: string;
  zone_id: string;
}
export interface CidrRoutingPolicy {
  collection_id: string;
  location_name: string;
}
export interface FailoverRoutingPolicy {
  type: string;
}
export interface GeolocationRoutingPolicy {
  continent?: string;
  country?: string;
  subdivision?: string;
}
export interface Coordinates {
  latitude: string;
  longitude: string;
}
export interface GeoproximityRoutingPolicy {
  aws_region?: string;
  bias?: number;
  local_zone_group?: string;
  coordinates: Coordinates;
}
export interface LatencyRoutingPolicy {
  region: string;
}
export interface WeightedRoutingPolicy {
  weight: number;
}
export interface AwsRoute53RecordArgs {
  health_check_id?: string;
  multivalue_answer_routing_policy?: boolean;
  name: string;
  records?: string[];
  set_identifier?: string;
  ttl?: number;
  type: string;
  zone_id: string;
  alias: Alias;
  cidr_routing_policy: CidrRoutingPolicy;
  failover_routing_policy: FailoverRoutingPolicy;
  geolocation_routing_policy: GeolocationRoutingPolicy;
  geoproximity_routing_policy: GeoproximityRoutingPolicy;
  latency_routing_policy: LatencyRoutingPolicy;
  weighted_routing_policy: WeightedRoutingPolicy;
}
export class aws_route53_record extends TerraformResource {
  readonly allow_overwrite?: boolean;
  readonly fqdn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53RecordArgs) {
    super(config, "resource", args, resourceName, "aws_route53_record");
  }
}