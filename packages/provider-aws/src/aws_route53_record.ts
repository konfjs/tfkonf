import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53RecordArgsAlias {
  evaluate_target_health: boolean;
  name: string;
  zone_id: string;
}

export interface AwsRoute53RecordArgsCidrRoutingPolicy {
  collection_id: string;
  location_name: string;
}

export interface AwsRoute53RecordArgsFailoverRoutingPolicy {
  type: string;
}

export interface AwsRoute53RecordArgsGeolocationRoutingPolicy {
  continent?: string;
  country?: string;
  subdivision?: string;
}

export interface AwsRoute53RecordArgsGeoproximityRoutingPolicyCoordinates {
  latitude: string;
  longitude: string;
}

export interface AwsRoute53RecordArgsGeoproximityRoutingPolicy {
  aws_region?: string;
  bias?: number;
  local_zone_group?: string;
  coordinates: AwsRoute53RecordArgsGeoproximityRoutingPolicyCoordinates;
}

export interface AwsRoute53RecordArgsLatencyRoutingPolicy {
  region: string;
}

export interface AwsRoute53RecordArgsWeightedRoutingPolicy {
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
  alias: AwsRoute53RecordArgsAlias;
  cidr_routing_policy: AwsRoute53RecordArgsCidrRoutingPolicy;
  failover_routing_policy: AwsRoute53RecordArgsFailoverRoutingPolicy;
  geolocation_routing_policy: AwsRoute53RecordArgsGeolocationRoutingPolicy;
  geoproximity_routing_policy: AwsRoute53RecordArgsGeoproximityRoutingPolicy;
  latency_routing_policy: AwsRoute53RecordArgsLatencyRoutingPolicy;
  weighted_routing_policy: AwsRoute53RecordArgsWeightedRoutingPolicy;
}

export class aws_route53_record extends TerraformResource {
  readonly allow_overwrite?: boolean;
  readonly fqdn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53RecordArgs) {
    super(config, "resource", args, resourceName, "aws_route53_record");
  }
}
