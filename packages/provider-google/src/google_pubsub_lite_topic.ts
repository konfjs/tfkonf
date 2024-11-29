import { TerraformConfig, TerraformResource } from "tfs";
export interface Capacity {
  publish_mib_per_sec: number;
  subscribe_mib_per_sec: number;
}
export interface PartitionConfig {
  count: number;
  capacity: Capacity;
}
export interface ReservationConfig {
  throughput_reservation?: string;
}
export interface RetentionConfig {
  per_partition_bytes: string;
  period?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubLiteTopicArgs {
  name: string;
  region?: string;
  zone?: string;
  partition_config: PartitionConfig;
  reservation_config: ReservationConfig;
  retention_config: RetentionConfig;
  timeouts: Timeouts;
}
export class google_pubsub_lite_topic extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubLiteTopicArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_lite_topic");
  }
}