from rest_framework import serializers
from . import models
from nomadgram.users import models as user_models
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)


class SmallImageSerializer(serializers.ModelSerializer):

  """ Used for the notifications """

  class Meta:
    model = models.Image
    fields = (
        'file',
    )


class CountImageSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Image
    fields = (
        'id',
        'file',
        'like_count',
        'comment_count'
    )


class LikeSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Like
    fields = '__all__'


class FeedUserSerializer(serializers.ModelSerializer):

  class Meta:
    model = user_models.User
    fields = (
        'username',
        'profile_image',
    )


class CommentSerializer(serializers.ModelSerializer):

  creator = FeedUserSerializer(read_only=True)
  is_owner = serializers.SerializerMethodField()

  class Meta:
    model = models.Comment
    fields = (
        'id',
        'message',
        'creator',
        'is_owner'
    )

  def get_is_owner(self, obj):
    if 'request' in self.context:

      request = self.context['request']
      if obj.creator.id == request.user.id:
        return True
      return False


class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

  comments = CommentSerializer(many=True)
  creator = FeedUserSerializer(read_only=True)
  tags = TagListSerializerField()
  is_liked = serializers.SerializerMethodField()

  class Meta:
    model = models.Image
    fields = (
        'id',
        'file',
        'location',
        'caption',
        'comments',
        'like_count',
        'creator',
        'tags',
        'natural_time',
        'is_liked'
    )

  def get_is_liked(self, obj):
    if 'request' in self.context:
      request = self.context['request']
      try:
        models.Like.objects.get(
            creator__id=request.user.id, image__id=obj.id)
        return True
      except models.Like.DoesNotExist:
        return False
    return False


class InputImageSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Image
    fields = (
        'file',
        'location',
        'caption',
    )
