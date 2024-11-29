import { TerraformConfig, TerraformResource } from "tfs";
export interface AmazonMskCluster {
  msk_cluster_arn: string;
}
export interface VpcConfig {
  security_groups_ids?: string[];
  subnet_ids: string[];
}
export interface KafkaCluster {
  amazon_msk_cluster: AmazonMskCluster;
  vpc_config: VpcConfig;
}
export interface ConsumerGroupReplication {
  consumer_groups_to_exclude?: string[];
  consumer_groups_to_replicate: string[];
  detect_and_copy_new_consumer_groups?: boolean;
  synchronise_consumer_group_offsets?: boolean;
}
export interface StartingPosition {
  type?: string;
}
export interface TopicReplication {
  copy_access_control_lists_for_topics?: boolean;
  copy_topic_configurations?: boolean;
  detect_and_copy_new_topics?: boolean;
  topics_to_exclude?: string[];
  topics_to_replicate: string[];
  starting_position: StartingPosition;
}
export interface ReplicationInfoList {
  source_kafka_cluster_arn: string;
  target_compression_type: string;
  target_kafka_cluster_arn: string;
  consumer_group_replication: ConsumerGroupReplication;
  topic_replication: TopicReplication;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMskReplicatorArgs {
  description?: string;
  replicator_name: string;
  service_execution_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  kafka_cluster: KafkaCluster;
  replication_info_list: ReplicationInfoList;
  timeouts: Timeouts;
}
export class aws_msk_replicator extends TerraformResource {
  readonly arn!: string;
  readonly current_version!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskReplicatorArgs) {
    super(config, "resource", args, resourceName, "aws_msk_replicator");
  }
}